import React, { useState } from "react";
import { Modal } from "./Modal";
import { Sparkles, CheckCircle2 } from "lucide-react";

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SignInModal: React.FC<SignInModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setEmail("");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleReset} maxWidth="max-w-md">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-full border border-primary/60 flex items-center justify-center mx-auto text-primary font-display italic text-2xl bg-surface-container">
            G
          </div>
          <h3 className="font-display text-2xl text-on-surface">
            Guide Sanctuary Pass
          </h3>
          <p className="text-xs text-secondary max-w-xs mx-auto">
            All notes, interactive roadmaps, and diagnostics remain open &
            freely accessible without mandatory login.
          </p>
        </div>

        {submitted ? (
          <div className="bg-surface-container border border-primary/40 rounded-[12px] p-6 text-center space-y-3">
            <CheckCircle2 className="w-8 h-8 text-primary mx-auto" />
            <h4 className="font-display text-lg text-on-surface">
              Local Profile Active
            </h4>
            <p className="text-xs text-secondary">
              Your personalized bookmarks and roadmap progress are saved
              securely in your browser's local sanctuary storage.
            </p>
            <button
              onClick={handleReset}
              className="w-full py-2.5 rounded-full bg-primary text-on-primary text-xs font-semibold hover:bg-primary-hover transition-all"
            >
              Return to Sanctuary
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-medium text-on-surface">
                Email Address for Sync (Optional)
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="scholar@university.edu"
                className="w-full bg-surface-container border border-outline-variant rounded-[12px] px-4 py-2.5 text-xs text-on-surface placeholder-secondary/60 focus:outline-none focus:border-primary focus:bg-surface"
              />
            </div>

            <div className="p-3 bg-surface-container rounded-[12px] border border-outline-variant flex items-start space-x-2 text-[11px] text-secondary">
              <Sparkles className="w-4 h-4 text-tertiary flex-shrink-0 mt-0.5" />
              <span>
                Zero telemetry, zero ads, no intrusive notification spam. Built
                for pure academic concentration.
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-primary text-on-primary text-xs font-semibold hover:bg-primary-hover transition-all shadow-terra-card"
            >
              Activate Local Sanctuary Pass
            </button>
          </form>
        )}
      </div>
    </Modal>
  );
};
