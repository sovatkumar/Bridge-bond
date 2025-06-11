import React from "react";
import Image from 'next/image';

export default function page() {
    return (
        <div className="container py-20 px-4">
            <div className="flex py-10 gap-10">
                <div className="py-5 w-1/2">
                    <h2 className="text-3xl md:text-5xl xl:text-6xl text-black pb-5">
                        Roam N Learn
                        <span className="primary-red"> TERMS AND CONDITIONS</span>
                    </h2>
                    <p className="text-lg md:text-2xl">
                        By opting in to receive alerts from "Roam N Learn" you consent to
                        receive SMS messages that include booking reminders and updates on the
                        latest Roam N Learn news, deals and trips. To opt in, please complete
                        the Newsletter Signup form on the homepage. After Opt-in, we will send
                        you a message confirming your opt-in to 75322 to receive Roam N Learn
                        Alerts. Message and data rates may apply. 2 messages per month.
                        <br />
                        <br />
                        By opting in to this service, you agree to receive mobile text alerts
                        using an automatic telephone dialing system. Consent to receive
                        marketing text messages is not required as a condition of purchasing
                        any goods or services. By signing up, you confirm that you are over
                        the age of 13.
                    </p>
                </div>
                <div className="md:w-1/2 w-full">
                    <Image
                        width={558}
                        height={374}
                        src="/images/terms-condition.png"
                        alt="Main Interaction"
                        className="rounded-3xl w-full object-cover"
                    />
                </div>
            </div>
            <div className="py-5">
                <h4 className="text-xl md:text-3xl primary-blue  pb-2">
                    STOP Information
                </h4>
                <p className="text-lg md:text-2xl">
                    Text STOP to 12345 to stop receiving "Roam N Learn" messages from Roam
                    N Learn. You will receive a confirmation text.
                </p>
            </div>
            <div className="py-5">
                <h4 className="text-xl md:text-3xl primary-blue  pb-2">
                    HELP Information
                </h4>
                <p className="text-lg md:text-2xl pb-1">
                    For additional information, <span className="primary-red">text HELP to 12345 or contact us at (91)
                        1234567890.</span>
                </p>
                <p className="text-lg md:text-2xl">
                    T-Mobile is not liable for delayed or undelivered messages.
                </p>
                <br />
                <br />
                <p className="text-lg md:text-2xl">
                    If you have any questions about your text plan or data plan, it is
                    best to contact your wireless provider.
                </p>
                <br />
                <p className="text-lg md:text-2xl">
                    If you have any questions regarding privacy, please read our Privacy &
                    Policies.
                </p>
                <br />
                <p className="text-lg md:text-2xl">
                    No mobile information will be shared with or sold to third
                    parties/affiliates for marketing/promotional purposes. All the above
                    categories exclude text messaging originator opt-in data and consent;
                    this information will not be shared with any third parties, including
                    affiliate or business partners. The opt-in is not transferable to
                    another party involved in the process.
                </p>
            </div>
        </div>
    );
}
