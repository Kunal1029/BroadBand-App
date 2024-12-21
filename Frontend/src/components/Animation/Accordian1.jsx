import React from "react";

function Accordian1() {
  return (
    <div>
      <>
        <h1>CSS-Only Animated Accordion</h1>
        <section className="accordion" id="overview">
          <h1 className="title">
            <a href="#overview">Overview</a>
          </h1>
          <div className="content">
            <div className="wrapper">
              <p>
                This CodePen demonstrates how we can animate the opening and
                closing states of an accordion with fancy reveal animation using
                only CSS. This concept is suitable for creating{" "}
                <strong>FAQ sections</strong>,<strong>Table of Contents</strong>
                , and more.
              </p>
            </div>
          </div>
        </section>

        <section className="accordion" id="how-does-it-work">
          <h1 className="title">
            <a href="#how-does-it-work">How does it work?</a>
          </h1>
          <div className="content">
            <div className="wrapper">
              <p>
                We cannot transition height or any CSS property from zero to
                auto. If we want to smoothly expand a collapsed accordion, we
                could set a<code>max-height</code> and transition the{" "}
                <code>height</code> property to a large value when we expand the
                section. However,
                <a
                  href="https://css-tricks.com/using-css-transitions-auto-dimensions/#aa-there-are-two-crucial-downsides-to-this"
                  target="_blank"
                >
                  it may not properly work
                </a>
                if the content is larger than the <code>max-height</code>.
              </p>
              <p>
                So, here we create a CSS grid with a grid item. Then we
                transition the
                <code>grid-template-rows</code> property from <code>0fr</code>{" "}
                to
                <code>1fr</code> and the grid item transitions to its content
                height.
              </p>
              <p>
                I used CSS <code>clip-path</code> and{" "}
                <code>mix-blend-mode</code> to animate the background and text
                color of the accordion. Each accordion has two pseudo-elements.
                We know that <code>opacity</code>,<code>clip-path</code> and,{" "}
                <code>visibility</code> are animatable CSS properties. So when
                the accordion is selected using the
                <code>:target</code> pseudo-class, we transition the clip-path
                circle radius to 200% of the
                <code>::before</code>
                pseudo-element. When the accordion is not selected, we do the
                same with the
                <code>::after</code> but this time with a delay. This creates an
                illusion as it appears to clip from inside.
              </p>
              <p>
                Since the accordion title is an anchor element, users can also
                navigate through the items with their keyboard.
              </p>
            </div>
          </div>
        </section>

        <section className="accordion" id="inspiration">
          <h1 className="title">
            <a href="#inspiration">Inspiration</a>
          </h1>
          <div className="content">
            <div className="wrapper">
              <p>
                In a recent video, Kevin showed us a way to animate height from
                zero to auto value. Seeing that, I couldn't resist experimenting
                with the idea. Then I came up with this CSS-only accordion
                component and added the reveal animation too!
              </p>
              <p>
                I would highly recommend watching
                <a href="https://youtu.be/B_n4YONte5A" target="_blank">
                  his video
                </a>
                , where he beautifully explains the technique and points out how
                he discovered it. Also, read
                <a
                  href="https://keithjgrant.com/posts/2023/04/transitioning-to-height-auto/"
                  target="_blank"
                >
                  Keith J. Grant's post
                </a>
                and
                <a
                  href="https://nemzes.net/posts/animating-height-auto/"
                  target="_blank"
                >
                  Nelson Menezes's post
                </a>
                on the same topic.
              </p>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

export default Accordian1;
