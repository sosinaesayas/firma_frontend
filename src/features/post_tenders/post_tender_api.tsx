import {getRequest} from "../../services/api_service";

export const fetchProducts = async () => {
    return getRequest("/admin/products");
};