import className from 'classnames';

type IButtonProps = {
  xl?: boolean;
  children: string;
  texture?: boolean;
  tb_padding?: boolean;
};

const Button = (props: IButtonProps) => {
  const btnClass = className({
    btn: true,
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    // 'btn-primary': true,
    'btn-texture': props.texture,
    'btn-tb-padding': props.tb_padding,
  });

  return (
    <div className={btnClass}>
      {props.children}

      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-md text-center;
          }

          .btn-base {
            @apply text-lg font-semibold py-2 px-4;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-4 px-6;
          }

          .btn-texture {
            @apply bg-button-image bg-transparent	bg-full p-2 pl-8 pr-8 bg-no-repeat shadow-lg;
          }

          .btn-primary:hover {
            @apply bg-transparent;
          }

          .btn-tb-padding {
            @apply p-4 pl-8 pr-8;
          }
        `}
      </style>
    </div>
  )
}

export {Button};

