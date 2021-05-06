import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

const Page: FC<PageProps> = ({ location }) => (
  <div className="govuk-grid-row">
    <Helmet>
      <title>Accessibility - Home Office Design System</title>
      <meta name="og:article:section" content="Accessibility" />
    </Helmet>
    <div className="govuk-grid-column-one-quarter">
      <NavigationMenu items={[
        {
          href: '/accessibility/audio-and-video',
          text: 'Audio and video'
        }
      ]} />
    </div>
    <div className="govuk-grid-column-three-quarters">
      <h1>
        <span className="caption">Accessibility</span>
        Audio and video
      </h1>
      <p>It's important to consider how people with different access needs will use media content.</p>

      <p>Here are some examples of users with different access needs: </p>

      <ul>

      <li>someone who has a cognitive impairment may have difficulty processing auditory information
       and find it helpful to use captions</li>

      <li>if you’re deaf or have a hearing impairment you will not be able to hear the audio and will
       use captions or a transcript</li>

      <li>a user who is blind or partially sighted may use audio descriptions to understand what's
      happening visually, or they may use text-to-speech software to read out a transcript</li>

      <li>someone who is deafblind may use braille to read a transcript</li>

      <li>if you rely on keyboard navigation or use a screen reader you’ll need an accessible media
      player</li>

      </ul>

      <table class="govuk-table">
        <caption class="govuk-table__caption govuk-table__caption--m">Examples of users with access needs</caption>
        <thead class="govuk-table__head">
          <tr class="govuk-table__row">
            <th scope="col" class="govuk-table__header">User</th>
            <th scope="col" class="govuk-table__header">Access need</th>
            <th scope="col" class="govuk-table__header">May find helpful</th>
          </tr>
        </thead>
        <tbody class="govuk-table__body">
          <tr class="govuk-table__row">
            <td class="govuk-table__cell">Cognitive impairment</td>
            <td class="govuk-table__cell">Difficulty processing auditory information</td>
            <td class="govuk-table__cell">Captions</td>

          </tr>
          <tr class="govuk-table__row">
            <td class="govuk-table__cell">Deaf or has a hearing impairment</td>
            <td class="govuk-table__cell">Cannot hear the audio</td>
            <td class="govuk-table__cell">Captions or a transcript</td>

          </tr>
          <tr class="govuk-table__row">
            <td class="govuk-table__cell">Blind or partially sighted</td>
            <td class="govuk-table__cell">Cannot see the visual elements of a video</td>
            <td class="govuk-table__cell">Text-to-speech software to read a transcript</td>

          </tr>

          <tr class="govuk-table__row">
            <td class="govuk-table__cell">Deafblind</td>
            <td class="govuk-table__cell">Cannot hear audio or see the visual elements</td>
            <td class="govuk-table__cell">Braille to read a transcript</td>

          </tr>

          <tr class="govuk-table__row">
            <td class="govuk-table__cell">Motor impairment</td>
            <td class="govuk-table__cell">Cannot use a mouse</td>
            <td class="govuk-table__cell">An accessible media player that can be used with keyboard navigation</td>

          </tr>
        </tbody>
      </table>

      <h2>
        Helping everyone
      </h2>

<p>Making your audio and video content accessible can benefit users with and without a disability.</p>

<p>For example, any user may choose to quickly read through a transcript instead of watching a video.</p>

<p>Or they might use captions in loud locations where the audio can’t be heard or in quiet environments where sound can’t be
used. Captions can also be helpful to people who are not native speakers of the language.</p>

<h2>The basics</h2>

<p>Do the following things to start making your video or audio content accessible (this is not a comprehensive list):</p>

<ul>

<li>provide a transcript</li>

<li>use captions for video</li>

<li>provide an audio description for video that includes important visual information</li>

<li>make it clear where to find the transcript and audio-described version</li>

<li>use a media player that meets accessibility considerations such as keyboard accessibility</li>

</ul>


<h2>Creating good content</h2>

<p>You should make your audio and video content as accessible as possible as well as providing appropriate alternatives
to ensure that everyone has a comparable experience.</p>

<p>The <A href="https://www.w3.org/WAI/media/av/">Making Audio and Video Media Accessible guide</A> provides a great
exploration of accessibility considerations.</p>

<h3>The video and audio itself</h3>

<p>Your video and audio content needs be as accessible as possible, even before you provide alternatives such as captions
and a transcript. </p>

<p>When creating the video and audio consider the following.</p>

<p>Do: </p>

<ul>
<li>make sure speech can be clearly heard and there's good separation from any background noise </li>

<li>make sure information makes sense to people who cannot see the video by being as descriptive as possible in the main audio </li>

<li>add audio description to convey information that cannot be included in the main audio </li>

<li>try to have the speaker in frame </li>

<li>allow space for a sign language interpreter </li>

<li>make sure text is easy to read and has good colour contrast </li>
</ul>

<p>Do not:</p>

<ul>
<li>use jargon, acronyms or idioms </li>

<li>use flashing content as this may cause seizures </li>
</ul>

<h3>Captions</h3>

<p>You should always provide captions that are synchronised with the audio. Captions are the audio in text form, displayed on the video screen.</p>

<p>When creating captions, make sure you:</p>

<ul>
<li>make it clear who’s speaking </li>

<li>include important sounds as well as speech </li>

<li>check them for accuracy if you’re auto-generating them </li>

<li>use closed captions when the video player supports this </li>
</ul>

<p>Find out more about <A href="https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded">pre-recorded captions</A> and <A href="https://www.w3.org/WAI/WCAG21/Understanding/captions-live">live captions</A>.</p>

<h4>Closed and open captions</h4>

<p>Use closed captions rather than open captions. Closed captions can be hidden or shown by the user. </p>

<h3>Transcript</h3>

<p>Provide a transcript for all media content. A transcript is the text of all the content in a video, presented separately from it.</p>

<p>Make sure you:</p>

<ul>
<li>include all the audio and visual information so that users can understand all the content that’s in the video just from the transcript </li>

<li>position the transcript next to the video or clearly link to it </li>
</ul>

<h3>Audio description</h3>

<p>An <A href="https://www.w3.org/WAI/WCAG21/Understanding/audio-description-or-media-alternative-prerecorded">audio description</A> describes visual information needed to understand the content of a video.</p>

<p>Make sure you:</p>

<ul>
<li>make it clear where to find the audio-described version (if separate from the main video content) </li>

<li>include all that audio and visual information that’s in the video so that you could understand all the content that’s in the video </li>
</ul>

<p>Alternatively, if your video is narrated, you could incorporate any important visual information into the narration.</p>

<h2>Media player accessibility</h2>

<p>In addition to making the content accessible, the video or audio player must also be fully accessible:</p>

<ul>
<li>do not autoplay video or audio content </li>

<li>ensure that the media player meets all other accessibility considerations, such as keyboard accessibility </li>
</ul>

<h2>When you cannot make something accessible</h2>

<p>Tell users when certain accessibility features are not present and why, such as no captions due to the video not having important
auditory information.</p>

<p>Provide dates for fixes and include these in your accessibility statement.</p>


<div className="contact-us">
  <h2 className="govuk-heading-m">Get in touch</h2>
  <p>If you’ve got a question or suggestion share it on the UK Government Digital Slack channel #accessibility or email <A href="mailto:access@digital.homeoffice.gov.uk">access@digital.homeoffice.gov.uk</A>.</p>
</div>

    </div>
  </div>
);

export default Page;
export const title = 'Accessibility';
