'use client';

import { useEffect, useState } from 'react';

// types
import { UserData } from '@/types/types';
import { useQuery } from '@tanstack/react-query';
import { getUserInfoReq } from '@/apis/userAPIs/userAPIs';
import DaySelectChip from '@/components/SelectChip/DaySelectChip/DaySelectChip';
import Link from 'next/link';

export default function ProfilePage() {
  const [userData, setUserData] = useState<UserData | null>(null);

  const { data, isPending, error } = useQuery({
    queryKey: ['userData'],
    queryFn: () => getUserInfoReq(),
  });

  useEffect(() => {
    setUserData(data?.data);
  }, [data]);

  return (
    <>
      {userData && (
        <>
          <Link
            href="/profile/edit"
            className="rounded-lg bg-gray-100 px-3 py-2"
          >
            Edit profile
          </Link>
          <h1 className="text-xl font-bold">{`${userData?.firstName} ${userData?.lastName}`}</h1>
          <p>{userData?.email}</p>
          <p>
            {userData?.role.length === 2
              ? 'Mentor / Mentee'
              : userData?.role[0]}
          </p>
          <DaySelectChip
            options={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
            selectedOptions={userData?.availableDays.map((day) =>
              day.slice(0, 3),
            )}
            editable={false}
            className="flex-row"
          />
        </>
      )}
    </>
  );
}
