import React from 'react'
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import Wrapper from '../styles/SidebarFooterStyle';

const SidebarFooterContainer = () => {
    return (
        <Wrapper>
            <div className="companyName">
                Iappc
            </div>
            <div className="CopyrightText">
                <CopyrightOutlinedIcon fontSize='small' />
                <span>all rights reserved</span>
            </div>
        </Wrapper>
    )
}

export default SidebarFooterContainer
