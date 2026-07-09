import React from "react";

/**
 * Catches errors thrown by R3F canvases (failed GLTF loads, texture fetches,
 * WebGL shader compilation errors, etc.) and swaps in a `fallback` node
 * instead of crashing the whole page.
 */
class CanvasErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.warn("[3D canvas] failed to load, showing fallback:", error?.message ?? error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? null;
    }
    return this.props.children;
  }
}

export default CanvasErrorBoundary;
