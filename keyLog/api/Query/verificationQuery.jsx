import { useMutation } from "react-query";
import { postVerification } from "../api";

const postVerificationMutation = useMutation(postVerification, {
  onSuccess:() => {
    // INvalidates cache and refetch
    queryClient.invalidateQueries("verification")
  }
})

 const handleVerification = (e) => {

  e.preventDefault();
  postVerificationMutation.mutate({ phonenum: "01063572816" });
  //글자 초기화
};