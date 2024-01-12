import { useDispatch, useSelector } from 'react-redux';
import { hideTooltip, selectTooltip, showTooltip } from 'redux/slices/tooltipSlice';

// -----------------------------------------------------------------------------

const useTooltip = () => {
  const dispatch = useDispatch();
  const tooltip = useSelector(selectTooltip);

  const show = () => {
    dispatch(showTooltip());
  };

  const hide = () => {
    dispatch(hideTooltip());
  };

  return {
    isVisible: tooltip.isVisible,
    show,
    hide
  };
};

export default useTooltip;
