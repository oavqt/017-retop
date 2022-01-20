interface PreviewEducationProps {
  education?: PreviewEducationPropsObjectGroup;
}

interface PreviewEducationPropsObject {
  university?: string;
  degree?: string;
  date?: string;
  description?: string;
}

type PreviewEducationPropsObjectArray = Array<PreviewEducationPropsObject>;

interface PreviewEducationPropsObjectGroup {
  group?: PreviewEducationPropsObjectArray;
}

export {
  type PreviewEducationPropsObject,
  type PreviewEducationPropsObjectArray,
  type PreviewEducationPropsObjectGroup
};

export default PreviewEducationProps;
