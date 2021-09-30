import { default as NextLink, LinkProps } from 'next/link';

const Link = (props : React.PropsWithChildren<LinkProps>)  => {
    return (
    <div style={{
            cursor: 'pointer'
        }}>
        <NextLink
            
            {...props}>
                {props.children}
        </NextLink>
    </div>);
};
export default Link;