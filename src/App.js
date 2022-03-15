import React, { useEffect } from "react";
import "./App.css";
import "./dashboard.css";
import "./responsive.css";
import "./dashboardResponsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from "./screens/HomeScreen";
import SingleProduct from "./screens/SingleProduct";
import Login from "./screens/Login";
import Register from "./screens/Register";
import CartScreen from "./screens/CartScreen";
import ShippingScreen from "./screens/ShippingScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import NotFound from "./screens/NotFound";
import PrivateRouter from './PrivateRouter';
import DashboardScreen from './screens/AdminScreen/DashboardScreen';
import AdminProductScreen from './screens/AdminScreen/AdminProductScreen';
import AdminCategoriesScreen from './screens/AdminScreen/AdminCategoriesScreen';
import AdminOrderScreen from './screens/AdminScreen/AdminOrderScreen';
import AdminOrderDetailScreen from './screens/AdminScreen/AdminOrderDetailScreen';
import AdminAddProduct from './screens/AdminScreen/AdminAddProduct';
import AdminUserScreen from './screens/AdminScreen/AdminUserScreen';
import AdminEditProductScreen from './screens/AdminScreen/AdminEditProductScreen';
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import { productListAdminAction } from "./redux/Action/productAction";
import { listAdminOrdersAction } from "./redux/Action/orderAction";


function App() {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(productListAdminAction())
      dispatch(listAdminOrdersAction())
    }
  },[dispatch, userInfo])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/search/:keyword" element={<HomeScreen />} />
        <Route path="/page/:pagenumber" element={<HomeScreen />} />
        <Route path="/search/:keyword/page:pagenumber" element={<HomeScreen />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<PrivateRouter />}> 
          <Route path="profile" element={<ProfileScreen />} />
        </Route>

        <Route path="/cart/*" element={<CartScreen />} />

        <Route path="/" element={<PrivateRouter />}> 
         <Route path="shipping" element={<ShippingScreen />} />
        </Route>
        
        <Route path="/" element={<PrivateRouter />}> 
          <Route path="payment" element={<PaymentScreen />} />
        </Route>

        <Route path="/" element={<PrivateRouter />}> 
          <Route path="placeorder" element={<PlaceOrderScreen />} />
        </Route>

        <Route path="/" element={<PrivateRouter />}> 
          <Route path="order/:id" element={<OrderScreen />} />
        </Route>

        <Route path="*" element={<NotFound />} />
        
        <Route path="/dashboard" element={userInfo && userInfo.isAdmin ? <PrivateRouter /> : <Navigate to="*"/> } >
          <Route path="" element={<DashboardScreen />} />
          <Route path="products" element={<AdminProductScreen />} />
          <Route path="category" element={<AdminCategoriesScreen />} />
          <Route path="orders" element={<AdminOrderScreen />} />
          <Route path="order/:id" element={<AdminOrderDetailScreen />} />
          <Route path="addproduct" element={<AdminAddProduct />} />
          <Route path="users" element={<AdminUserScreen />} />
          <Route path="product/:id/edit" element={<AdminEditProductScreen />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
