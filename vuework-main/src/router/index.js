import { createRouter, createWebHistory } from 'vue-router'

// Views
import HomeView from '../views/HomeView.vue'
import AdminView from '../views/AdminView.vue'
import EmployeeView from '../views/EmployeeView.vue'
import CustomerView from '../views/CustomerView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import PetsView from '../views/PetsView.vue'
import FoodView from '../views/FoodView.vue'
import SuppliesView from '../views/SuppliesView.vue'
import OrdersView from '../views/OrdersView.vue'
import CartView from '../views/CartView.vue'
import BillView from '../views/BillView.vue'
import NotFoundView from '../views/NotFoundView.vue'

// Replace 'your-repo-name' with your GitHub repository name
const router = createRouter({
history: createWebHistory('/vuework/'),
routes: [
{ path: '/', name: 'home', component: HomeView, meta: { title: 'Home - SmartPetShop' } },
{ path: '/admin', name: 'admin', component: AdminView, meta: { title: 'Admin Dashboard', requiresAuth: true, requiresAdmin: true } },
{ path: '/employee', name: 'employee', component: EmployeeView, meta: { title: 'Employee Dashboard' } },
{ path: '/customer', name: 'customer', component: CustomerView, meta: { title: 'Customer Dashboard' } },
{ path: '/login', name: 'login', component: LoginView, meta: { title: 'Login - SmartPetShop' } },
{ path: '/signup', name: 'signup', component: SignupView, meta: { title: 'Signup - SmartPetShop' } },
{ path: '/manage-pets', name: 'manage-pets', component: PetsView, meta: { title: 'Manage Pets' } },
{ path: '/manage-food', name: 'manage-food', component: FoodView, meta: { title: 'Manage Food' } },
{ path: '/manage-supplies', name: 'manage-supplies', component: SuppliesView, meta: { title: 'Manage Supplies' } },
{ path: '/orders', name: 'orders', component: OrdersView, meta: { title: 'Orders' } },
{ path: '/cart', name: 'cart', component: CartView, meta: { title: 'Cart' } },
{ path: '/bill', name: 'bill', component: BillView, meta: { title: 'Bill' } },
{ path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView, meta: { title: '404 - Not Found' } }
]
})

// Update document title dynamically
router.beforeEach((to, from, next) => {
document.title = to.meta.title || 'SmartPetShop'
next()
})

export default router
