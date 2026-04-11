import { useUser } from "../features/auth/useUser";
import { useAddToCart } from "../features/cart/useAddToCart";
import { useRemoveFromCart } from "../features/cart/useRemoveFromCart";
import useUpdateCartItemQuantity from "../features/cart/useUpdateCartItemQuantity";
import {
  addToGuestCart,
  removeFromGuestCart,
  updateGuestCartQuantity,
} from "../utils/guestCart";

export default function useCartFunctions() {
  const { data, isAuthenticated } = useUser();
  const { addItemToCart } = useAddToCart();
  const { removeItemFromCart } = useRemoveFromCart();
  const { updateItemQuantity } = useUpdateCartItemQuantity();

  const user_id = data?.id;

  const handleAddToCart = ({
    product_id,
    quantity,
    selected_size,
    selected_color,
    product,
  }) => {
    if (isAuthenticated) {
      addItemToCart({
        user_id: user_id,
        product_id,
        quantity,
        selected_size,
        selected_color,
      });
      return;
    }

    addToGuestCart({
      product_id,
      quantity,
      selected_size,
      selected_color,
      product,
    });
  };

  const handleRemoveFromCart = ({
    product_id,
    selected_size,
    selected_color,
  }) => {
    if (isAuthenticated) {
      removeItemFromCart({
        product_id,
        selected_size,
        selected_color,
      });
      return;
    }

    removeFromGuestCart({
      product_id,
      selected_size,
      selected_color,
    });
  };

  const handleUpdateItemQuantity = ({
    product_id,
    quantity,
    selected_size,
    selected_color,
  }) => {
    if (isAuthenticated) {
      updateItemQuantity({
        product_id,
        quantity,
        selected_size,
        selected_color,
      });
      return;
    }

    updateGuestCartQuantity({
      product_id,
      quantity,
      selected_size,
      selected_color,
    });
  };

  return { handleAddToCart, handleRemoveFromCart, handleUpdateItemQuantity };
}
