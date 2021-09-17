import className from 'classnames';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  color?: string;
  rotate?: boolean;
  shadow?: string;
  imageMT?: string;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-24',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    }
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div
        className={`w-full sm:w-1/2 text-center sm:px-6 ${
          props.color ? `text-${props.color}` : 'text-gray-900'
        }`}
      >
        <h3 className="text-3xl font-semibold">{props.title}</h3>
        <div className="mt-6 text-xl leading-9 whitespace-pre-wrap">{props.description}</div>
      </div>

      <div className={`w-full sm:w-1/2 p-6 ${props.imageMT? props.imageMT : 'pt-20'}`}>
        {props.rotate ? (
          <div className="transform rotate-project-rotate pb-12">
            <img
              src={`${router.basePath}${props.image}`}
              className={`ml-10p ${props.shadow? props.shadow : ''}`}
              alt={props.imageAlt}
              width="80%"
            />
          </div>
        ) : (
          <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} />
        )}
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
