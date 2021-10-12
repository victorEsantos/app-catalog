import React, { useState, useEffect } from "react";
import {
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { SearchInput, ProductCard } from "../../../components";
import { deleteProduct, getProducts } from "../../../services";
import { admin } from "../../../styles";

interface AdminProductsProps {
  screen: string;
  setScreen: Function;
}

const AdminProducts: React.FC<AdminProductsProps> = (props) => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { setScreen, setProductId } = props;

  async function handleDelete(id: number) {
    setLoading(true);
    await deleteProduct(id);
    fillProducts();
  }

  function handleEdit(id: number) {
    setScreen("editProduct");
    setProductId(id);
  }

  async function fillProducts() {
    setLoading(true);
    const res = await getProducts();
    setProducts(res.data.content);
    setLoading(false);
  }

  useEffect(() => {
    fillProducts();
  }, []);

  const data =
    search.length > 0
      ? products.filter((product) =>
          product.name.toLowerCase().includes(search.toLowerCase())
        )
      : products;

  return (
    <ScrollView contentContainerStyle={admin.container}>
      <TouchableOpacity
        style={admin.addButton}
        onPress={() => setScreen("newProduct")}
      >
        <Text style={admin.addButtonText}>Adicionar</Text>
      </TouchableOpacity>
      <SearchInput
        placeholder="Nome do produto"
        search={search}
        setSearch={setSearch}
      />
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        data.map((product) => {
          const { id } = product;
          return (
            <ProductCard
              key={id}
              {...product}
              role="admin"
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })
      )}
    </ScrollView>
  );
};

export default AdminProducts;
