import React, { FunctionComponent } from "react";
import { connect } from 'react-redux';
import { pageProps } from "../types";
import { getText } from "../redux/selectors";

const Page: FunctionComponent<pageProps> = props => {
    return <div>{props.text}</div>
};

export default connect(
    state => ({ text: getText(state)})
)(Page);