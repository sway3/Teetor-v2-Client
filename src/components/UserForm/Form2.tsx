import { ChangeEventHandler, useState } from 'react';
import SelectChip from '../SelectChip/RoleSelectChip/SelectChip';
import SkillSearch from '../SkillSearch/SkillSearch';
import SkillChip from '../SkillSearch/SkillChip';

interface FormProps {
  formData: any;
  setFormData: (formData: any) => void;
  handleFormChange: ChangeEventHandler;
}

export default function Form2({
  formData,
  setFormData,
  handleFormChange,
}: FormProps) {
  const roleOptions = ['Mentor', 'Mentee'];

  const handleProfSearch = (thisProfession: string) => {
    const profession = formData.profession;

    if (profession.includes(thisProfession)) {
      setFormData(formData);
    } else {
      setFormData((prev: any) => ({
        ...prev,
        profession: [...profession, thisProfession],
      }));
    }
  };

  const handleSkillSearch = (thisSkill: string) => {
    if (formData.canHelpWith.includes(thisSkill)) {
      setFormData(formData);
    } else {
      setFormData({
        ...formData,
        canHelpWith: [...formData.canHelpWith, thisSkill],
      });
    }
  };

  const handleProfChip = (
    e: React.MouseEvent<HTMLButtonElement>,
    thisProfession: string,
  ) => {
    e.preventDefault();

    setFormData({
      ...formData,
      profession: formData.profession.filter(
        (prof: string) => prof !== thisProfession,
      ),
    });
  };

  const handleSkillChip = (
    e: React.MouseEvent<HTMLButtonElement>,
    thisSkill: string,
  ) => {
    e.preventDefault();

    setFormData({
      ...formData,
      canHelpWith: formData.canHelpWith.filter(
        (skill: string) => skill !== thisSkill,
      ),
    });
  };

  return (
    <>
      <div className="mt-3">
        <h1 className="text-2xl">Who are you?</h1>
        <p className="text-gray-500 text-base/5 mt-2">
          You can choose your role in between mentor and mentee, or even both.
        </p>
        <div className="mt-3">
          <SelectChip
            options={roleOptions}
            selectedOptions={formData.role}
            setFormData={setFormData}
          />
        </div>
        {formData.role.includes('Mentor') && (
          <div className="mt-6">
            <h2 className="mt-3 text-xl">For mentors</h2>
            <h3 className="mt-3">What is your profession?</h3>
            <SkillSearch
              option="profession"
              onResultChange={handleProfSearch}
            />
            {formData.profession && (
              <div className="flex flex-wrap gap-1 mt-3">
                {formData.profession?.map(
                  (profession: string, index: number) => (
                    <SkillChip
                      key={index}
                      label={profession}
                      onClick={(e) => handleProfChip(e, profession)}
                    />
                  ),
                )}
              </div>
            )}

            <h3 className="mt-3">What skills can you help your mentee?</h3>
            <SkillSearch
              option="canhelpwith"
              onResultChange={handleSkillSearch}
            />
            {formData.canHelpWith && (
              <div className="flex flex-wrap gap-1 mt-3">
                {formData.canHelpWith?.map((skill: string, index: number) => (
                  <SkillChip
                    key={index}
                    label={skill}
                    onClick={(e) => handleSkillChip(e, skill)}
                  />
                ))}
              </div>
            )}

            <h3 className="mt-3">
              Briefly introduce yourself, and explain specifically on how you
              can help your mentee.
            </h3>
            <textarea
              placeholder="Enter description"
              className="mt-1 w-full border border-gray-400 rounded-lg p-2 resize-y"
              onChange={handleFormChange}
              name="description"
            />
          </div>
        )}
      </div>
    </>
  );
}
