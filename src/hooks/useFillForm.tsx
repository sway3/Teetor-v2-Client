import { getSignUpInfoReq } from '@/apis/userAPIs/userAPIs';
import { useQuery } from '@tanstack/react-query';

export default function useFillForm() {
  const { data, isPending, isError } = useQuery({
    queryKey: ['signup'],
    queryFn: () => getSignUpInfoReq(),
  });
}
