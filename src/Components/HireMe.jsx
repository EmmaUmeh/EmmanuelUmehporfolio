const HireMe = ({ buttonText, buttonColor, buttonTextColor, buttonBorderColor  }) => {
   
    const buttonStyle = {
        backgroundColor: buttonColor,
        color: buttonTextColor,
        border: buttonBorderColor,
      };
   
    return (
      <div className="Hireme">
        <a>
          <button style={buttonStyle}>
            {buttonText}
          </button>
        </a>
      </div>
    );
  };
  
  export default HireMe;
  