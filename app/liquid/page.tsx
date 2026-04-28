import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Card } from "@/components/ui/card";
import { LiquidText } from "@/components/ui/glasscn/liquid-text";
import { LiquidWatch } from "@/components/ui/glasscn/liquid-watch";

function MyComponents() {
  return (
    <main className="flex min-h-svh justify-center p-6">
      <div className="flex w-full max-w-6xl min-w-0 flex-col gap-10 py-10">
        <CardTitle className="mb-4 text-4xl">Liquid Glass</CardTitle>
        <div className="flex w-full max-w-3xl flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Apple Watch</CardTitle>
              <CardDescription>
                Reusable watch-face treatment built from stacked liquid digits. It takes `hours`, `minutes`, and `size`
                so the same component can scale from a compact badge to a larger dashboard tile.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap items-end gap-4">
              <LiquidWatch hours={9} minutes={41} size="sm" />
              <LiquidWatch hours={21} minutes={57} size="md" />
              <LiquidWatch hours={7} minutes={8} size="lg" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Liquid Text</CardTitle>
              <CardDescription>
                Shader-masked typography powered by the same gem smoke effect — wraps any string in an animated,
                metallic liquid-glass treatment.
              </CardDescription>
              <CardContent className="py-2">
                <LiquidText text="Alex" scale={5} />
              </CardContent>
            </CardHeader>
          </Card>
        </div>
      </div>
    </main>
  );
}

export default MyComponents;
