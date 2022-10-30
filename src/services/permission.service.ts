import { IHeader } from "../types";
import { axiosRequest } from "../config/axios.config";

/* Token verify */
export const verifyToken = async (header: IHeader) => {
  const serviceName: string = process.env.SERVICE_NAME || "";
  const formData = { service_name: serviceName };
  const response = await axiosRequest.post(
    "/api/v1/token-verify/admin",
    formData,
    header
  );

  if (response.status === 200) {
    return response.data.data;
  }

  return false;
};
