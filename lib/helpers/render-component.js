export default function(props,h, component) {
    return props.override ? props.override : h(component,{props});
}
