import { presignedUrlReq } from '@/apis/s3APIs';
import { useQuery } from '@tanstack/react-query';

export default function usePresignedUrl(selectedImg: File) {
  const {
    data: presignedData,
    isPending: presignedPending,
    refetch: refetchPresignedUrl,
  } = useQuery({
    queryKey: ['s3url', selectedImg?.name],
    queryFn: () => {
      if (selectedImg) return presignedUrlReq(selectedImg?.name);
      // return Promise.reject(new Error('Selected image is not available'));
    },
    enabled: false,
    retry: false,
  });

  return { presignedData, presignedPending, refetchPresignedUrl };
}
