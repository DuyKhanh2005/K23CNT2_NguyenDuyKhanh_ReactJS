import axios from "axios";

const API_URL = "https://67da139035c87309f52ad943.mockapi.io/k23cnt2_nguyenduykhanh/ndk_users";

// Hàm gọi API với phương thức động (GET, POST, PUT, DELETE)
const apiRequest = async (method, endpoint = "", data = null) => {
    try {
        const response = await axios({
            method,
            url: `${API_URL}/${endpoint}`,
            data,
        });
        return response.data;
    } catch (error) {
        console.error(`Lỗi ${method} dữ liệu:`, error);
        return method === "GET" ? [] : null; // Trả về mảng rỗng cho GET, null cho các phương thức khác
    }
};

// Các hàm API sử dụng apiRequest
export const getUsers = () => apiRequest("GET");
export const getUserById = (id) => apiRequest("GET", id);
export const createUser = (user) => apiRequest("POST", "", user);
export const updateUser = (id, user) => apiRequest("PUT", id, user);
export const deleteUser = (id) => apiRequest("DELETE", id);
