import React, {useCallback} from 'react';
import { Linking, TouchableOpacity } from 'react-native';
import { Link } from './style';

export const ExternalLinkButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
        await Linking.openURL(url);
    }, [url]);

    return (
        <TouchableOpacity onPress={handlePress}>
            <Link> {children} </Link>
        </TouchableOpacity>
    )
};