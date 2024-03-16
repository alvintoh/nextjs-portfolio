interface ProjectData {
  name: string;
  description: string;
  link: string;
  githubLink: string;
  iconName: string;
  image: Image;
  body: Body;
  _id: string;
  _raw: Raw;
  type: string;
  slug: string;
}

interface Image {
  height: number;
  width: number;
  url: string;
  type: string;
  _raw: Record<string, unknown>;
}

interface Body {
  raw: string;
  code: string;
}

interface Raw {
  sourceFilePath: string;
  sourceFileName: string;
  sourceFileDir: string;
  contentType: string;
  flattenedPath: string;
}

export type { ProjectData };
