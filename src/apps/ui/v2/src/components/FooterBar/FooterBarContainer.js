import FooterBar from './FooterBar';

const FooterBarContainer = ({ handleModalClose, handleModalOpen, classes }) => {
  return (
    <FooterBar
      handleClose={handleModalClose}
      open={handleModalOpen}
      classes={classes}
    />
  );
};

export default FooterBarContainer;
