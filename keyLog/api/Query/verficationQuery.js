export const postVerificationMutation = () =>
  useMutation(postVerification, {
    onSuccess: () => {
      // INvalidates cache and refetch
      queryClient.invalidateQueries('verification');
    },
  });

const handleVerification = e => {
  e.preventDefault();
  postVerificationMutation.mutate({ phonenum: '01028467723' });
  //글자 초기화
};

const postVerificationMutation = useMutation(postVerification, {
  onSuccess: () => {
    // INvalidates cache and refetch
    queryClient.invalidateQueries('verification');
  },
});
