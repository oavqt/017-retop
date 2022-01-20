interface PreviewExperienceProps {
  experience?: PreviewExperiencePropsObjectGroup;
}

interface PreviewExperiencePropsObject {
  position?: string;
  company?: string;
  date?: string;
  description?: string;
}

type PreviewExperiencePropsObjectArray = Array<PreviewExperiencePropsObject>;

interface PreviewExperiencePropsObjectGroup {
  group?: PreviewExperiencePropsObjectArray;
}

export {
  type PreviewExperiencePropsObject,
  type PreviewExperiencePropsObjectArray,
  type PreviewExperiencePropsObjectGroup
};

export default PreviewExperienceProps;
