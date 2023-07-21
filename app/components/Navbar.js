'use client'
import Link from 'next/link';
import { Montserrat } from 'next/font/google'
import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'

const montserrat = Montserrat({ subsets: ['latin'] })


const Navbar = () => {
  let [isOpen, setIsOpen] = useState(false)

  

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <nav className="px-6 md:px-24 pb-4">
      <div className="flex items-center justify-between">
        <div className={`text-3xl md:text-[2.75rem] font-bold ${montserrat.className} flex items-center`}>
          Daily<span className='text-dailycolor text-5xl'>.</span>
        </div>
        <div>
          <div onClick={() => openModal()}>
            <a className="text-white px-4 py-3 md:px-9 md:py-4 rounded-3xl bg-dailycolor font-medium">
              Get a Demo
            </a>
          </div>
          {EmailDialog(isOpen, closeModal)}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

export function EmailDialog(isOpen, closeModal) {
  const htmlData = `<div id="mc_embed_shell">
  <link
    href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
    rel="stylesheet"
    type="text/css"
  />
  <style type="text/css">
    #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width: 100%;}
    /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
       We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
  </style>
  <div id="mc_embed_signup">
    <form
      action="https://usedaily.us21.list-manage.com/subscribe/post?u=b62e0959f5d69794da47b2958&amp;id=0acc3344de&amp;f_id=00fcfbe1f0"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      class="validate"
      target="_blank"
    >
      <div id="mc_embed_signup_scroll">
        <h2>Please share your email so we can get in touch with you.</h2>
        <div class="indicates-required">
          <span class="asterisk">*</span> indicates required
        </div>
        <div class="mc-field-group">
          <label for="mce-EMAIL"
            >Email Address <span class="asterisk">*</span></label
          ><input
            type="email"
            name="EMAIL"
            class="required email"
            id="mce-EMAIL"
            required=""
            value=""
          />
        </div>
        <div id="mce-responses" class="clear foot">
          <div
            class="response"
            id="mce-error-response"
            style="display: none"
          ></div>
          <div
            class="response"
            id="mce-success-response"
            style="display: none"
          ></div>
        </div>
        <div style="position: absolute; left: -5000px" aria-hidden="true">
          /* real people should not fill this in and expect good things - do not
          remove this or risk form bot signups */
          <input
            type="text"
            name="b_b62e0959f5d69794da47b2958_0acc3344de"
            tabindex="-1"
            value=""
          />
        </div>
        <div class="optionalParent">
          <div class="clear foot">
            <input
              type="submit"
              name="subscribe"
              id="mc-embedded-subscribe"
              class="button"
              value="Subscribe"
            />
            <p class="brandingLogo" style="margin: 0px auto">
              <a
                href="http://eepurl.com/ikHjG5"
                title="Mailchimp - email marketing made easy and fun"
                ><img
                  src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_light_dtp.svg"
                  alt="referral badge"
              /></a>
            </p>
          </div>
        </div>
      </div>
    </form>
  </div>
  <script
    type="text/javascript"
    src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
  ></script>
  <script type="text/javascript">
    (function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]=EMAIL;ftypes[0]=merge;fnames[1]=FNAME;ftypes[1]=merge;fnames[2]=LNAME;ftypes[2]=merge;fnames[3]=ADDRESS;ftypes[3]=merge;fnames[4]=PHONE;ftypes[4]=merge;fnames[5]=BIRTHDAY;ftypes[5]=merge;false}(jQuery));var $mcj = jQuery.noConflict(true);
  </script>
</div>
`
  return <Transition appear show={isOpen} as={Fragment}>
    <Dialog as="div" className="relative z-10" onClose={closeModal}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
      </Transition.Child>

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              {/* <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                Subscribe to our email
              </Dialog.Title> */}
              <div className=" flex items-center justify-center" dangerouslySetInnerHTML={{ __html: htmlData }} />

              {/* <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  onClick={closeModal}
                >
                  Got it, thanks!
                </button>
              </div> */}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>;
}
