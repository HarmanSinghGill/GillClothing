

const NavBar = () =>{
    return (
        <>
           <div className="NavBar center">
            <div className="SectionalDivide bodoni-moda center">
                <span className="Logo">GILL</span>
            </div>
            <div className="SectionalDivide center">
                <div className="placeholderForBtns">
                    <span className="locateBtns roboto-flex">women</span>
                    <span className="locateBtns roboto-flex">men</span>
                    <span className="locateBtns roboto-flex">acceessories</span>
                    <span className="locateBtns roboto-flex">shoes</span>
                </div>
            </div>
            <div className="SectionalDivide">
                <div className="linkPlaceholders">
                    <div className="IconHolder center Initial">
                        <span class="material-icons">search</span>
                    </div>
                    
                </div>
                <div className="linkPlaceholders">
                    <div className="IconHolder center Initial">
                        <span class="material-icons">favorite_border</span>
                    </div>
                    
                </div>
                <div className="linkPlaceholders">
                    <div className="IconHolder center Initial">
                        <span class="material-icons">checkroom</span>
                        
                    </div>
                    
                </div>
                <div className="linkPlaceholders">
                    <div className="IconHolder center Initial">
                        <span class="material-icons">attribution</span>
                        
                        </div>
                    
                </div>
            </div>
           </div>
        </>
    )
}
export default NavBar;