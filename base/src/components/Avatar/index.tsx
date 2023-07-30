import "./styles.css";

type Props = {
  image: string;
  size?: number;
};

const Avatar = ({ image, size }: Props) => {
  const sizeAvatar = size || 147;

  return (
    <div>
      <img
        src={image}
        alt="avatar"
        className="avatar"
        style={{ width: `${sizeAvatar}px`, height: `${sizeAvatar}px` }}
      />
    </div>
  );
};

export default Avatar;
