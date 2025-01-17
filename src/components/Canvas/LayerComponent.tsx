import { useStorage } from '@/liveblocks.config';
import React, { memo } from 'react';
import Ellipse from './Ellipse';
import Path from './Path';
import { CanvasMode, LayerType } from '@/lib/types';
import { colorToCss } from '@/lib/utils';
import Rectangle from './Rectangle';
import Note from './Note';
import Text from './Text';
import Vision from './Vision';
import TopicVote from './TopicVote';
import Story from './Story';
import Spread from './Spread';
import Discussion from './Discussion';
import Persona from './Persona';
import SolvingProblem from './SolvingProblem';

type Props = {
  id: string;
  mode: CanvasMode;
  onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void;
  selectionColor?: string;
};

const LayerComponent = memo(
  ({ mode, onLayerPointerDown, id, selectionColor }: Props) => {
    const layer = useStorage((root) => root.layers.get(id));
    if (!layer) {
      return null;
    }

    const isAnimated =
      mode !== CanvasMode.Translating && mode !== CanvasMode.Resizing;

    switch (layer.type) {
      case LayerType.Ellipse:
        return (
          <Ellipse
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );
      case LayerType.Path:
        return (
          <Path
            key={id}
            points={layer.points}
            onPointerDown={(e) => onLayerPointerDown(e, id)}
            x={layer.x}
            y={layer.y}
            fill={layer.fill ? colorToCss(layer.fill) : '#CCC'}
            stroke={selectionColor}
            strokeOptions={{
              size: layer.strokeWidth || 16,
              thinning: 0.5,
              smoothing: 0.5,
              streamline: 0.5,
            }}
          />
        );
      case LayerType.Rectangle:
        return (
          <Rectangle
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );
      case LayerType.Text:
        return (
          <Text
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );
      case LayerType.Note:
        return (
          <Note
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );
      case LayerType.Vision: // VisionLayer 처리 추가
        return (
          <Vision
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );
      case LayerType.TopicVote: // TopicVote 케이스 추가
        return (
          <TopicVote
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );

      case LayerType.Spread:
        return (
          <Spread
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );
      case LayerType.Discussion:
        return (
          <Discussion
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );
      case LayerType.Persona:
        return (
          <Persona
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );
      case LayerType.SolvingProblem:
        return (
          <SolvingProblem
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );

      case LayerType.UserStory:
        return (
          <Story
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );
      default:
        console.warn('Unknown layer type');
        return null;
    }
  },
);

LayerComponent.displayName = 'LayerComponent';

export default LayerComponent;
