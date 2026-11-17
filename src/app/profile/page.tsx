"use client";

import { authClient } from "@/lib/auth-client";
import { FloppyDisk } from "@gravity-ui/icons";
import {
  Button,
  Card,
  FieldGroup,
  Fieldset,
  Skeleton,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Image from "next/image";
import React, { useState } from "react";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [showUpdateBox, setShowUpdateBox] = useState(false);

  const handleUpdateProfileButton = () => {
    setShowUpdateBox(!showUpdateBox);
  };

  const handleProfileUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const newUserInfo = Object.fromEntries(formData.entries()) as {
      name: string;
    };

    const { error } = await authClient.updateUser({
      name: newUserInfo.name,
    });

    if (error) {
      console.error("Profile update failed:", error);
      return;
    }

    setShowUpdateBox(false);
  };

  return (
    <div className="m-8">
      <Card className="relative container mx-auto h-[250px] w-96 rounded-2xl sm:h-[300px] md:h-[350px]">
        {user?.image ? (
          <Image
            src={user.image}
            alt={user.name}
            width={600}
            height={600}
            className="absolute inset-0 h-full w-full rounded-2xl object-cover"
          />
        ) : (
          <Skeleton className="h-full w-full rounded-lg" />
        )}

        <Card.Footer className="z-10 mt-auto flex items-end justify-between">
          <div>
            <div className="text-base font-medium text-black sm:text-lg">
              {user?.name}
            </div>

            <div className="text-xs font-medium text-black/50 sm:text-sm">
              {user?.email}
            </div>
          </div>

          <Button
            className="bg-white text-black"
            size="sm"
            variant="tertiary"
            onClick={handleUpdateProfileButton}
          >
            Update Profile
          </Button>
        </Card.Footer>
      </Card>

      {showUpdateBox && (
        <div className="mx-auto mt-6 w-96">
          <Form className="w-full max-w-96" onSubmit={handleProfileUpdate}>
            <Fieldset>
              <Fieldset.Legend>Profile Settings</Fieldset.Legend>

              <Description>Update your Name</Description>

              <FieldGroup>
                <TextField
                  name="name"
                  defaultValue={user?.name ?? ""}
                  validate={(value) => {
                    if (value.length < 3) {
                      return "Name must be at least 3 characters";
                    }
                    return null;
                  }}
                >
                  <Label>Name</Label>
                  <Input placeholder="Update Name" />
                  <FieldError />
                </TextField>
              </FieldGroup>

              <Fieldset.Actions>
                <Button type="submit">
                  <FloppyDisk />
                  Save changes
                </Button>

                <Button
                  type="button"
                  variant="secondary"
                  onClick={handleUpdateProfileButton}
                >
                  Cancel
                </Button>
              </Fieldset.Actions>
            </Fieldset>
          </Form>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
