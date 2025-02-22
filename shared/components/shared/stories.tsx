'use client';

import { cn } from '@/shared/lib/utils';
import { Api } from '@/shared/services/api.client';
import { IStory } from '@/shared/services/stories';
import React from 'react';
import { Container } from './container';
import { X } from 'lucide-react';
import ReactStories from 'react-insta-stories';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Props {
  className?: string;
}

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: true,
  adaptiveHeight: true,
};

const Stories: React.FC<Props> = ({ className }) => {
  const [stories, setStories] = React.useState<IStory[]>([]);
  const [open, setOpen] = React.useState(false);
  const [selectedStory, setSelectedStory] = React.useState<IStory>();
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    async function fetchStories() {
      const data = await Api.stories.getAll();
      setStories(data);
    }

    fetchStories();
  }, []);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const onClickStory = (story: IStory) => {
    setSelectedStory(story);
    setCurrentIndex(0);

    if (story.items.length > 0) {
      setOpen(true);
    }
  };

  return (
    <>
      <Container className={cn('flex items-center justify-between gap-2 my-10', className)}>
        {stories.length === 0 ? (
          <div className="flex gap-2 overflow-x-auto">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="w-[200px] h-[250px] bg-gray-200 rounded-md animate-pulse flex-shrink-0"
              />
            ))}
          </div>
        ) : (
          <div className="w-full max-w-[1280px] mx-auto">
            <Slider {...sliderSettings}>
              {stories.map((story) => (
                <div key={story.id} className="px-2">
                  <img
                    alt="storyImage"
                    onClick={() => onClickStory(story)}
                    className="rounded-md cursor-pointer w-full"
                    height={250}
                    width={200}
                    src={story.previewImageUrl}
                  />
                </div>
              ))}
            </Slider>
          </div>
        )}
        {open && selectedStory && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${
                  selectedStory.items[currentIndex]?.sourceUrl || selectedStory.previewImageUrl
                })`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'blur(10px)',
                transition: 'background-image 0.5s ease-in-out',
              }}
            />

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative w-[520px] z-10">
              <button className="absolute -right-10 -top-5 z-30" onClick={() => setOpen(false)}>
                <X className="absolute top-0 right-0 w-8 h-8 text-white/50" />
              </button>

              <ReactStories
                onAllStoriesEnd={() => setOpen(false)}
                stories={selectedStory.items.map((item) => ({ url: item.sourceUrl }))}
                defaultInterval={8000}
                width={520}
                height={800}
                onStoryStart={(index) => setCurrentIndex(index)}
              />
            </div>
          </div>
        )}
      </Container>
    </>
  );
};

export { Stories };
