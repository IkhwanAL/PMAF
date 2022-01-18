import React from "react";

export interface ModalProps {
	setModal: (ev: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
	modal: boolean;
}
