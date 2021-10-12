import React, { useEffect, useState } from "react";
import Toast from "react-native-tiny-toast";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  Image,
  Modal,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { TextInputMask } from "react-native-masked-text";

import { admin, theme, text } from "../../../styles";
import arrow from "../../../assets/leftArrow.png";
import {
  getCategories,
  updateProduct,
  uploadImage,
  getProduct,
} from "../../../services";

interface FormProductProps {
  setScreen: Function;
  productId: number;
}

const FormProduct: React.FC<FormProductProps> = (props) => {
  const { setScreen, productId } = props;

  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
  const [product, setProduct] = useState({
    name: "",
    description: "",
    imgUrl: " ",
    price: "",
    categories: [],
  });
  const [image, setImage] = useState("");

  useEffect(() => {
    async () => {
      const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Precisamos de acesso a biblioteca de images!");
      }
    };
  }, []);

  async function selectImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    !result.cancelled && setImage(result.uri);
  }

  async function handleUpload() {
    uploadImage(image).then((res) => {
      const { uri } = res?.data;
      setProduct({ ...product, imgUrl: uri });
    });
  }

  useEffect(() => {
    image ? handleUpload() : null;
  }, [image]);

  async function loadCategories() {
    setLoading(true);
    const res = await getCategories();
    setCategories(res.data.content);
    setLoading(false);
  }

  async function handleSave() {
    setLoading(true);
    const data = {
      ...product,
    };
    try {
      await updateProduct(data);
      setScreen("products");
      Toast.showSuccess("Produto atualizado com sucesso!");
    } catch (res) {
      console.warn(res);
      Toast.show("Erro ao atualizar");
    }
    setLoading(false);
  }

  function getRaw(e: string) {
    const str = e;
    const res = str.slice(2).replace(/\./g, "").replace(/,/g, ".");
    return res;
  }

  async function loadProduct() {
    setLoading(true);
    const res = await getProduct(productId);
    setProduct(res.data);
    setLoading(false);
  }

  useEffect(() => {
    loadCategories();
    loadProduct();
  }, []);

  // useEffect(() => {
  //   console.warn(product);
  // }, [product]);

  return (
    <View style={theme.formContainer}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <View style={theme.formCard}>
          <ScrollView>
            <Modal
              visible={showCategories}
              animationType="fade"
              transparent={true}
              presentationStyle="overFullScreen"
            >
              <View style={theme.modalContainer}>
                <ScrollView contentContainerStyle={theme.modalContent}>
                  {categories.map((cat) => {
                    const { id, name } = cat;
                    return (
                      <TouchableOpacity
                        style={theme.modalItem}
                        onPress={() => {
                          setProduct({
                            ...product,
                            categories: [{ id, name }],
                          });
                          setShowCategories(!showCategories);
                        }}
                        key={id}
                      >
                        <Text>{name}</Text>
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
              </View>
            </Modal>
            <TouchableOpacity
              onPress={() => setScreen("products")}
              style={theme.gobackContainer}
            >
              <Image source={arrow} />
              <Text style={text.goBackText}>VOLTAR</Text>
            </TouchableOpacity>
            <TextInput
              placeholder="Nome do Produto"
              style={theme.formInput}
              value={product.name}
              onChangeText={(e) => setProduct({ ...product, name: e })}
            />
            <TouchableOpacity
              style={theme.selectInput}
              onPress={() => setShowCategories(!showCategories)}
            >
              <Text>
                {product.categories.length > 0 && product.categories[0].name}
              </Text>
            </TouchableOpacity>
            <TextInputMask
              type={"money"}
              placeholder="Preço"
              style={theme.formInput}
              value={product.price}
              onChangeText={(e) => setProduct({ ...product, price: getRaw(e) })}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              style={theme.uploadBtn}
              onPress={selectImage}
            >
              <Text style={text.uploadText}>Carregar imagem</Text>
            </TouchableOpacity>
            <Text style={text.fileSize}>
              As images devem ser JPG ou PNG e não devem ultrapassar 5mb.
            </Text>

            <TouchableOpacity
              activeOpacity={0.9}
              onPress={selectImage}
              style={{
                width: "100%",
                height: 150,
                borderRadius: 10,
                marginVertical: 10,
              }}
            >
              <Image
                source={image === "" ? { uri: product.imgUrl } : { uri: image }}
                style={{ width: "100%", height: "100%", borderRadius: 10 }}
              />
            </TouchableOpacity>

            <TextInput
              multiline
              placeholder="Descrição"
              style={theme.textArea}
              value={product.description}
              onChangeText={(e) => setProduct({ ...product, description: e })}
            />
            <View style={theme.buttonContainer}>
              <TouchableOpacity
                style={theme.deleteBtn}
                onPress={() => {
                  Alert.alert(
                    "Deseja cancelar?",
                    "Os dados inseridos não serão salvos",
                    [
                      {
                        text: "Voltar",
                        style: "cancel",
                      },
                      {
                        text: "Confirmar",
                        onPress: () => setScreen("products"),
                        style: "default",
                      },
                    ]
                  );
                }}
              >
                <Text style={theme.deleteText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={theme.saveBtn}
                onPress={() => handleSave()}
              >
                <Text style={text.saveText}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default FormProduct;
