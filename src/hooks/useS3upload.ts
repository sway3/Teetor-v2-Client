import { uploadToS3Req } from '@/apis/s3APIs';
import { s3UploadData } from '@/types/types';
import { useMutation } from '@tanstack/react-query';

export default function useS3Upload() {
  const S3UploadMutation = useMutation({
    mutationFn: (uploadData: s3UploadData) => uploadToS3Req(uploadData),
    onSuccess: () => {},
  });
}
