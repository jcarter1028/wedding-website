import FadeIn from "../FadeIn";
import Title from "../Title";
import Text from "../Text";
import BackgroundAnimation from "../BackgroundAnimation";

const rsvpFormUrl =
  "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAQrM_VtUNUdEWlMwMTY3UThIRzRCWTFROFFTQzI0Uy4u&embed=true";

export default function RSVP() {
  return (
    <section className="pt-24 md:pt-28 pb-20 px-4 bg-gradient-to-b from-cream-50 to-cream-100 relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative isolate">
        <BackgroundAnimation />
        <FadeIn className="relative z-10">
          <Title title="RSVP" />
          <Text text="We can't wait to celebrate with you!" />
        </FadeIn>

        <FadeIn delay={0.15} className="relative z-10">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <iframe
              title="Wedding RSVP form"
              src={rsvpFormUrl}
              width="640"
              height="800"
              frameBorder="0"
              marginWidth={0}
              marginHeight={0}
              allowFullScreen
              className="block w-full min-h-[720px] md:min-h-[800px] border-0"
              style={{ maxWidth: "100%", maxHeight: "100vh" }}
            />
            <p className="px-6 py-4 text-center text-sm text-gray-600">
              Issue seeing the form?{" "}
              <a
                href={rsvpFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-sage-700 underline underline-offset-2 hover:text-sage-900"
              >
                Open in a new window
              </a>
              .
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
