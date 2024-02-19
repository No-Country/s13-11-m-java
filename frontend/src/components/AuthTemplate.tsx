interface AuthTemplateProps {
  image?: string;
  alt?: string;
  title?: React.ReactNode;
  children?: React.ReactNode;
}

const AuthTemplate = (props: AuthTemplateProps) => {
  const { image, title, alt, children } = props;
  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-5">
      <div className="container col-span-2 hidden min-h-6 place-content-center space-y-12 bg-primary text-background md:grid">
        {title && <h1 className="px-8 text-3xl">{title}</h1>}
        {image && (
          <div>
            <img src={image} alt={alt} />
          </div>
        )}
      </div>
      <div className="container col-span-3 flex items-center md:h-screen">{children}</div>
    </div>
  );
};
export default AuthTemplate;
