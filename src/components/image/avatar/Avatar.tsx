import Image from 'next/image';
import style from './Avatar.module.scss';

export interface IAvatar {
  url: string;
  alt: string;
  size?: number;
}

const DEFAULT_SIZE = 40;

const Avatar: React.FC<IAvatar> = ({ url, alt, size }) => {
  const s = size ?? DEFAULT_SIZE;
  const sizeImage: any = url == '' ? s + 'px' : s;

  return (
    <>
      {url != '' ? (
        <Image
          className={style.image}
          src={url ?? ''}
          alt={alt}
          width={sizeImage}
          height={sizeImage}
        />
      ) : (
        <div
          className={style.image}
          style={{
            height: sizeImage,
            width: sizeImage,
            backgroundColor: '#dbdbdb',
          }}
        />
      )}
    </>
  );
};

export default Avatar;
