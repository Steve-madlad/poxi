import { testimonials } from '@/lib/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Card } from '../ui/card';

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section>
      <div className="main-container px-5">
        <div className="section-heading">
          <div className="just-center">
            <div className="tag">Testimonials</div>
          </div>
          <h2 className="section-title">What our users say</h2>
          <p className="section-description">
            From intuitive design to powerful features, our app has been an essential tool for users
            around the world.
          </p>
        </div>

        <div className="just-center gap-6">
          <TestimonialColumn column={firstColumn} />
          <TestimonialColumn column={secondColumn} className="hidden! md:flex!" />
          <TestimonialColumn column={thirdColumn} className="hidden! lg:flex!" />
        </div>
      </div>
    </section>
  );
}

function TestimonialColumn({
  column,
  className,
}: {
  column: typeof firstColumn;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'col mt-10 max-w-xs gap-6 mask-[linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]',
        className,
      )}
    >
      {column.map((testimonial, index) => (
        <Card key={index} className="p-5 shadow-lg">
          <div>
            <div>{testimonial.text}</div>
            <div className="align-center mt-5 gap-2">
              <Image
                src={testimonial.imageSrc}
                alt="user"
                width={40}
                height={40}
                className="size-10 rounded-full"
              />
              <div className="col">
                <div className="tracking-light leading-5 font-medium">{testimonial.name}</div>
                <div className="tracking-light leading-5">{testimonial.username}</div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
