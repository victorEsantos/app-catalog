import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const colors = {
  white: "#FFFFFF",
  lightGray: "#F2F2F2",
  mediumGray: "#9E9E9E",
  darkGray: "#263238",
  black: "#000000",
  primary: "#407BEE",
  secondary: "#33569B",
  bluePill: "#407BFF61",
  red: "#DF5753",
  bottomLine: "#E1E1E1",
};

const text = StyleSheet.create({
  regular: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    color: colors.mediumGray,
  },
  bold: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
    color: colors.darkGray,
  },
  primaryText: {
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: colors.white,
    marginLeft: 20,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.primary,
  },
  currency: {
    fontSize: 16,
    fontWeight: "400",
    color: colors.mediumGray,
    marginRight: 10,
  },
  productDetailTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
  },
  productDescription: {
    fontSize: 16,
    fontWeight: "400",
    color: colors.mediumGray,
  },
  goBackText: {
    fontWeight: "bold",
    fontSize: 18,
    textTransform: "uppercase",
    color: colors.darkGray,
    marginLeft: 16,
  },
  loginTitle: {
    fontSize: 30,
    color: colors.darkGray,
    textTransform: "uppercase",
    marginBottom: 50,
  },
  logoutText: {
    color: colors.white,
  },
  uploadText: {
    color: colors.white,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  fileSize: {
    fontSize: 10,
    color: "blue",
    fontWeight: "300",
    marginVertical: 5,
  },
  saveText: {
    color: colors.white,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

const theme = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  scrollContainer: {
    padding: 10,
  },
  card: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.white,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: "center",
    justifyContent: "space-around",
  },
  draw: {
    width: 313,
    height: 225,
  },
  textContainer: {
    paddingHorizontal: 20,
  },
  primaryButton: {
    width: 290,
    height: 50,
    backgroundColor: colors.primary,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  arrowContainer: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  // Products Component
  productCard: {
    width: "100%",
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 12.5,
  },
  productDescription: {
    width: "100%",
    padding: 20,
    borderTopColor: colors.lightGray,
    borderTopWidth: 1,
  },
  priceContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  // Search container
  inputContainer: {
    width: "100%",
    height: 60,
    marginVertical: 12.5,
    paddingVertical: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: "center",
  },
  searchInput: {
    width: "90%",
    height: 40,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.bottomLine,
  },
  // Product Details
  detailContainer: {
    backgroundColor: colors.white,
    padding: 20,
  },
  detailCard: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.white,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    justifyContent: "space-around",
    padding: 20,
  },
  productImageContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: colors.lightGray,
    alignItems: "center",
    borderRadius: 20,
  },
  productImage: {
    width: 220,
    height: 220,
  },
  scrollTextContainer: {
    marginVertical: 20,
    padding: 20,
    borderWidth: 0.5,
    borderColor: colors.lightGray,
    borderRadius: 10,
  },
  gobackContainer: {
    width: 290,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 15,
  },
  // Button  component
  buttonTextContainer: {
    flex: 1,
    alignItems: "center",
  },
  // Login
  loginCard: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.white,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    marginVertical: 10,
  },
  passwordGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
  },
  textInput: {
    width: 290,
    height: 50,
    borderWidth: 1,
    borderColor: colors.mediumGray,
    borderRadius: 10,
    padding: 10,
  },
  toggle: {
    marginLeft: -50,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  deleteBtn: {
    width: "48%",
    height: 40,
    borderWidth: 1,
    borderColor: colors.red,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  deleteText: {
    textTransform: "uppercase",
    fontWeight: "bold",
    color: colors.red,
  },
  editBtn: {
    width: "48%",
    height: 40,
    borderWidth: 1,
    borderColor: colors.mediumGray,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  editText: {
    textTransform: "uppercase",
    fontWeight: "bold",
    color: colors.mediumGray,
  },
  // Form Product
  formContainer: {
    width: deviceWidth,
    padding: 20,
  },
  formCard: {
    width: "100%",
    height: "90%",
    backgroundColor: colors.white,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: "center",
    justifyContent: "space-around",
    padding: 20,
  },
  selectInput: {
    width: 290,
    height: 50,
    borderWidth: 1,
    borderColor: colors.mediumGray,
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
  },
  modalContainer: {
    width: deviceWidth,
    height: deviceHeight,
    backgroundColor: "#00000033",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalItem: {
    width: "100%",
    backgroundColor: colors.lightGray,
    marginVertical: 5,
    padding: 10,
    borderRadius: 5,
  },
  uploadBtn: {
    width: "100%",
    height: 40,
    backgroundColor: "#9E9E9E",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  textArea: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#9E9E9E",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingTop: 15,
    height: 200,
  },
  formInput: {
    width: 290,
    height: 50,
    borderWidth: 1,
    borderColor: colors.mediumGray,
    borderRadius: 10,
    padding: 10,
    marginVertical: 15,
  },
  saveBtn: {
    width: "48%",
    height: 40,
    backgroundColor: colors.primary,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});

const nav = StyleSheet.create({
  leftText: {
    color: colors.white,
    fontWeight: "bold",
    marginLeft: 20,
  },
  drawer: {
    marginRight: 20,
  },
  options: {
    width: deviceWidth,
    height: 120,
    backgroundColor: colors.primary,
    marginTop: 125,
    marginRight: -20,
    padding: 20,
    justifyContent: "space-between",
  },
  option: {
    paddingVertical: 5,
  },
  textOption: {
    color: colors.white,
    textTransform: "uppercase",
  },
  textActive: {
    fontWeight: "bold",
  },
  logoutBtn: {
    width: 60,
    height: 30,
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 10,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

const tabbar = StyleSheet.create({
  container: {
    width: deviceWidth,
    height: 80,
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  pill: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: colors.lightGray,
    borderRadius: 30,
  },
  pillActive: {
    backgroundColor: colors.bluePill,
  },
  pillText: {
    fontWeight: "bold",
    color: colors.mediumGray,
  },
  pillTextActive: {
    color: colors.primary,
  },
});

const admin = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
  },
  addButton: {
    width: "100%",
    height: 50,
    backgroundColor: colors.primary,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: colors.white,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
export { colors, theme, text, nav, tabbar, admin };
