import React, { FC } from 'react';
import cls from 'classnames';

import { prefixlib } from '../_util/constants';

const defaultProps = {
  prefixCls: `${prefixlib}inline-card`,
};

export interface InlineCardProps {
  /** 卡片标题 */
  title: string;
  /** 卡片内容 */
  content: string | number;
  /** 自定义class */
  className?: string;
  /** 样式前缀 */
  prefixCls?: string;
  /** 自定义style */
  style?: React.CSSProperties;
}

export const InlineCard: FC<InlineCardProps> = ({
  title,
  content,
  prefixCls,
  className,
  ...rest
}) => {
  const contentCls = cls(`${prefixCls}__content`, {
    'led-num': !Number.isNaN(+content),
  });

  return (
    <dl className={cls(prefixCls, className)} {...rest}>
      <dt className={`${prefixCls}__title`}>{title}</dt>
      <dd className={contentCls}>{content}</dd>
    </dl>
  );
};

InlineCard.defaultProps = defaultProps;

export default InlineCard;
