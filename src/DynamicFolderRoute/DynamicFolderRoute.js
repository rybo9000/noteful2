import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Primary from '../Primary/Primary';
import DynamicFolderSide from '../DynamicFolderSide/DynamicFolderSide';
import DynamicFolderContent from '../DynamicFolderContent/DynamicFolderContent';

class DynamicFolderRoute extends React.Component {
    render() {
        return (
            <>
            <Header />
            <Primary>
                <DynamicFolderSide />
                <DynamicFolderContent />
            </Primary>
            <Footer />
            </>

        )
    }
}

export default DynamicFolderRoute;