import {getRequest} from "../../services/api_service";

export const fetchProducts = async () => {
    return getRequest("/admin/products");
};

export const fetchAdditionalCosts = async () => {
    return getRequest("/admin/additional-cost");
}