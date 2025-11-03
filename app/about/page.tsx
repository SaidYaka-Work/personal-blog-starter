import Layout from '@/components/Layout';
import { getSiteSettings } from '@/lib/settings';

const settings = getSiteSettings();

export const metadata = {
  title: `About | ${settings.author.name}`,
  description: settings.author.bio,
};

export default function AboutPage() {
  // JSON-LD Schema for Person
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: settings.author.name,
    url: settings.site.url,
    sameAs: [
      settings.social.github ? `https://github.com/${settings.social.github}` : undefined,
      settings.social.linkedin ? `https://www.linkedin.com/in/${settings.social.linkedin}` : undefined,
      settings.social.twitter ? `https://twitter.com/${settings.social.twitter}` : undefined,
    ].filter(Boolean),
    description: settings.author.bio,
  };

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center mb-8">
          {settings.author.image && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={settings.author.image}
              alt={`${settings.author.name} - Profile`}
              className="rounded-full w-48 h-48 object-cover mb-6 shadow-lg"
            />
          )}
          <h1 className="text-4xl font-bold">About</h1>
        </div>

        <div className="prose lg:prose-lg">
          <p className="text-xl text-gray-700 mb-6">
            Hi, I&apos;m {settings.author.name}
          </p>

          <p className="text-gray-700 mb-6">
            {settings.author.bio}
          </p>

          <p className="text-gray-700 mb-8">
            This is my personal blog where I share my thoughts, experiences, and insights.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Connect</h2>
          <div className="flex gap-4 mb-8">
            {settings.social.github && (
              <>
                <a
                  href={`https://github.com/${settings.social.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-medium"
                >
                  GitHub
                </a>
                <span className="text-gray-400">•</span>
              </>
            )}
            {settings.social.linkedin && (
              <>
                <a
                  href={`https://www.linkedin.com/in/${settings.social.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-medium"
                >
                  LinkedIn
                </a>
                <span className="text-gray-400">•</span>
              </>
            )}
            {settings.social.twitter && (
              <a
                href={`https://twitter.com/${settings.social.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                Twitter
              </a>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
