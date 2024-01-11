import { useDispatch, useSelector } from 'react-redux';
import { hideTooltip, selectTooltip, showTooltip } from 'redux/slices/tooltipSlice';

// -----------------------------------------------------------------------------

const useTooltip = () => {
  const dispatch = useDispatch();
  const tooltip = useSelector(selectTooltip);

  const show = (content: any) => {
    dispatch(showTooltip(content));
  };

  const hide = () => {
    dispatch(hideTooltip());
  };

  return {
    isVisible: tooltip.isVisible,
    content: tooltip.content,
    show,
    hide
  };
};

export default useTooltip;
