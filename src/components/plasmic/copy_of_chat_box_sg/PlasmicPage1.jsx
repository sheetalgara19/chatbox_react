// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qkq1GYJeSisdsoHAunA7GS
// Component: pG3EAro069LM
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import TextInput from "../../TextInput"; // plasmic-import: tSPm0LoBpBYbm/component
import Button from "../../Button"; // plasmic-import: FHsN5oHAGgn/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_copy_of_chat_box_sg.module.css"; // plasmic-import: qkq1GYJeSisdsoHAunA7GS/projectcss
import sty from "./PlasmicPage1.module.css"; // plasmic-import: pG3EAro069LM/css

export const PlasmicPage1__VariantProps = new Array();

export const PlasmicPage1__ArgProps = new Array();

function PlasmicPage1__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        {true ? (
          <p.Stack
            as={"div"}
            data-plasmic-name={"root"}
            data-plasmic-override={overrides.root}
            data-plasmic-root={true}
            data-plasmic-for-node={forNode}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.root_reset,
              projectcss.plasmic_default_styles,
              sty.root
            )}
          >
            <TextInput
              data-plasmic-name={"textInput"}
              data-plasmic-override={overrides.textInput}
              className={classNames("__wab_instance", sty.textInput)}
              defaultValue={""}
              required={false}
            />

            <Button
              data-plasmic-name={"send"}
              data-plasmic-override={overrides.send}
              className={classNames("__wab_instance", sty.send)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___9HjiY
                )}
              >
                {"Send"}
              </div>
            </Button>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__npZfL
              )}
              inputMode={""}
            >
              {"Enter some text"}
            </div>
          </p.Stack>
        ) : null}
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "textInput", "textbox", "send"],
  textInput: ["textInput", "textbox"],
  send: ["send"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicPage1__ArgProps,
      internalVariantPropNames: PlasmicPage1__VariantProps
    });

    return PlasmicPage1__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPage1";
  } else {
    func.displayName = `PlasmicPage1.${nodeName}`;
  }
  return func;
}

export const PlasmicPage1 = Object.assign(
  // Top-level PlasmicPage1 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textInput: makeNodeComponent("textInput"),
    send: makeNodeComponent("send"),
    // Metadata about props expected for PlasmicPage1
    internalVariantProps: PlasmicPage1__VariantProps,
    internalArgProps: PlasmicPage1__ArgProps
  }
);

export default PlasmicPage1;
/* prettier-ignore-end */
