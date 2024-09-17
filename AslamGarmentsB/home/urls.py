from django.urls import path
from . import views
from rest_framework.authtoken.views import obtain_auth_token
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("login/", views.CustomAuthToken.as_view(), name="login"),
    path("signup/", views.register, name="register"),
    path("logout/", views.logout, name="logout"),
    path("getCat/", views.getCategories, name="getCategories"),
    path("checkAuth/", views.checkAuth, name="checkAuth"),
    path("products/", views.ProductListView.as_view(), name="products"),
    path("subscribe/", views.makeSubscription, name="Make Subscription"),
    path("getcolor/", views.getcolors, name="Get Colors"),
    path("getProduct/<int:pid>/", views.getProduct, name="Get Product"),
    path("getSizes/", views.getsizes, name="Get Sizes"),
    path("addtocart/", views.addCartItem, name="Add To Cart"),
    path("singleOrder/", views.singleOrder, name="Single Order"),
    path("getCart/", views.get_cart, name="Get Cart"),
    path("updateCart/", views.updateCartItem, name="Update Cart"),
    path("profile/", views.profile, name="Profile"),
    path("getOrder/", views.getOrder, name="Get Order"),
    path("isWholeSaleUser/", views.isWholeSaleUser, name="Check WholeSale User"),
    path(
        "getWholeSaleProducts/",
        views.getWholeSaleProducts,
        name="Get WholeSale Products",
    ),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
