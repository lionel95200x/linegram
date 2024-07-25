import Image from 'next/image';
import Link from 'next/link';

import { APP_NAME } from '@/utils/constant';

export function Logo() {
  return (
    <Link href='/' className='flex w-fit items-center gap-2'>
      <Image src='/logo.png' width={40} height={40} priority quality={100} alt={`${APP_NAME} logo mark`} />
      <span className='font-alt text-xl text-white'>{APP_NAME}</span>
    </Link>
  );
}
