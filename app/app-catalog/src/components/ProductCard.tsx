import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { text, theme } from "../styles";
import { useNavigation } from "@react-navigation/native";
import { TextInputMask } from "react-native-masked-text";

interface ProductCardProps {
  id: Number;
  imgUrl: string;
  name: String;
  price: string;
  role?: string;
  handleDelete: Function;
  handleEdit: Function;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  imgUrl,
  name,
  price,
  role,
  handleDelete,
  handleEdit,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={theme.productCard}
      activeOpacity={0.8}
      onPress={() =>
        role ? "" : navigation.navigate("Product Details", { id })
      }
    >
      <Image
        source={{ uri: imgUrl }}
        style={{ width: 140, height: 140, margin: 16 }}
      />
      <View style={theme.productDescription}>
        <Text style={text.productTitle}>{name}</Text>
        <View style={theme.priceContainer}>
          <Text style={text.currency}>R$</Text>
          <TextInputMask
            type={"money"}
            options={{
              precision: 2,
              separator: ",",
              delimiter: ".",
              unit: "",
              suffixUnit: "",
            }}
            value={price}
            editable={false}
            style={text.productPrice}
          />
        </View>
        {role === "admin" && (
          <View style={theme.buttonContainer}>
            <TouchableOpacity
              style={theme.deleteBtn}
              onPress={() => handleDelete(id)}
            >
              <Text style={theme.deleteText}>Excluir</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={theme.editBtn}
              onPress={() => handleEdit(id)}
            >
              <Text style={theme.editText}>Editar</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
